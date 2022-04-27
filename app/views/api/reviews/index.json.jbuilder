@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :comment, :rating, :created_at, :product_id, :user_id, :id, :updated_at
        json.reviewer review.reviewer.fname
    end
end

