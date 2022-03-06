class CartItem < ApplicationRecord
    validates :cart_id, :product_id, :quantity, presence: true

    belongs_to :cart, 
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :Cart

    belongs_to :product, 
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product
end
