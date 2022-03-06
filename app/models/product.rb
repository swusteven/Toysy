class Product < ApplicationRecord
    CATEGORIES = [
        "Baby and Toddler Toys",
        "Stuffed Animals and Plushies",
        "Learning and School",
        "Dolls and Action Figures"    
    ]
    validates :name, :description, :price, :quantity, :seller_id, presence: true
    validates :category, presence: true, inclusion: {in:CATEGORIES,  message: "invalid category" }

    belongs_to :seller,
        primary_key: :id,
        class_name: :User

    has_many :reviews,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Review

    has_many :cart_items, 
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :CartItem


    has_one_attached :image 
    
end



