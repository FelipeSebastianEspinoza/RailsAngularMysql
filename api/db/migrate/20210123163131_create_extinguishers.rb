class CreateExtinguishers < ActiveRecord::Migration[6.1]
  def change
    create_table :extinguishers do |t|
      t.string :name
      t.string :status
      t.date :charge
      t.date :expiration
      t.boolean :active
      t.timestamps
    end
  end
end
