class Review < ApplicationRecord
    belongs_to :product, optional: true,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :reviewer, optional: true,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
