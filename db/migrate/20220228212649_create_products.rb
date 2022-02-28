class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.text :name, null: false
      t.text :description, null: false
      t.decimal :price, null: false
      t.integer :quantity, null: false
      t.string :category, null: false
      t.integer :seller_id, null: false
      t.timestamps
    end

    add_index :products, :name
  end
end
