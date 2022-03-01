json.extract! @product, :id, :name, :description, :price, :quantity, :category, :seller_id
json.imageUrl url_for(@product.image)