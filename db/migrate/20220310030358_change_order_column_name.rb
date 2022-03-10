class ChangeOrderColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :order_items, :transaction_id, :order_id
  end
end
