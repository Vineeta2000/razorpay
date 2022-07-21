class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :address
      t.integer :phone
      t.string :email
      t.string :message

      t.timestamps
    end
  end
end
