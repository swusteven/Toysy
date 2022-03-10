json.extract! @review, :id, :comment, :rating, :created_at, :product_id, :user_id
json.reviewer @review.reviewer.fname


