class RemoveColumnOnReview < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, ["product_id", "user_id"]
  end
end
