class Product < ApplicationRecord
    CATEGORIES = [
        "Baby & Toddler Toys",
        "Stuffed Animals & Plushies",
        "Learning & School",
        "Miniature Toys",
        "Dolls & Action Figures"    
    ]

    validates :name, :description, :price, :quantity, :seller_id, presence: true
    validates :category, presence: true, inclusion: {in:CATEGORIES,  message: "invalid category" }

    has_one_attached :image 
    
end
