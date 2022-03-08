class CartItem < ApplicationRecord
    validates :cart_id, :product_id, :quantity, presence: true
    validates :cart_id, uniqueness: { scope: :product_id,
    message: "A cart can't have more than one of the same product" }


    belongs_to :cart, 
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :Cart

    belongs_to :product, 
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product
end
