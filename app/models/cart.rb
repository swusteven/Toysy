class Cart < ApplicationRecord
    validates :user_id,  presence: true

    belongs_to :buyer,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :products,
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :CartItem

end