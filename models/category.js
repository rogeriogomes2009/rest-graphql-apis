
const init = connection => {
    const create = async(data) => {
        const conn = await connection
        await conn.query('insert into categories (category) value (?)', data)
    }

    const remove = async(id) => {
        const conn = await connection
        await conn.query('delete from categories where id = ? limit 1', [id])
    }
    const update = async(id, data) => {
        const conn = await connection
        await conn.query('update categories set category = ? where id = ?', [...data, id])
    }
            
            const findImages = async(results) => {
            if(results.length === 0){
                return []
            }
            const conn = await connection
            const categoryIds = results.map(product => product.id).join(',')
            const [images] = await conn.query('select * from images where product_id in (' + categoryIds + ') group by product_id')
            const mapImages = images.reduce((anterior, atual) => {
                return {
                    ...anterior,
                    [atual.product_id]: atual
                }
            }, {}) 
            
            const products = results.map(product => {
                return {
                    ...product,
                    images: mapImages[product.id]
                }
            })
            return products
        }

        const findById = async(id) => {
            const conn = await connection
            const [results] = await conn.query('select * from categories where id = ' + id)
            const productWithImages = await findImages(results)
            return productWithImages [0]
        }

        const findAll = async() => {
            const conn = await connection
            const [results] = await conn.query('select * from categories')
            return findImages(results)
        }

const findAllByCategory = async(categoryId) => {
        const conn = await connection
        const [results] = await conn.query('select * from products where id in (select product_id from categories_products where category_id = ?)', [categoryId])
        return findImages(results)
    }
    
    return {
        create,
        remove,
        update,
        findById,
        findAll,
        findAllByCategory
    }
}
module.exports = init
