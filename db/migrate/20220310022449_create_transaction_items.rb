class CreateTransactionItems < ActiveRecord::Migration[5.2]
  def change
    create_table :transaction_items do |t|
      t.integer :transaction_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.decimal :price, null: false

      t.timestamps
    end
  end
end
