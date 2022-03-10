class Order < ApplicationRecord
    validates :user_id,  presence: true

    belongs_to :buyer,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :products,
        primary_key: :id,
        foreign_key: :order_id,
        class_name: :OrderItem
end
