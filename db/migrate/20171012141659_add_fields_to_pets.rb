class AddFieldsToPets < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :biography, :text
    add_column :pets, :adopted_at, :datetime
    add_column :pets, :birthday, :datetime
  end
end
