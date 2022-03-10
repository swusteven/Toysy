class ChangeTransactionTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :transactions, :orders
    rename_table :transaction_items, :order_items
  end
end
