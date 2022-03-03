@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :price, :quantity, :category, :seller_id, :seller
        json.imageUrl url_for(product.image)
    end
end
