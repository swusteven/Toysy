class UpdateColumnNameOnReview < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :buyer_id, :user_id
  end
end
