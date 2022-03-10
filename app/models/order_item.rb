class OrderItem < ApplicationRecord
    validates :order_id, :product_id, :quantity, :price, presence: true

    belongs_to :order,
        primary_key: :id,
        foreign_key: :order_id,
        class_name: :Order

    belongs_to :product, 
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product    
    
end
