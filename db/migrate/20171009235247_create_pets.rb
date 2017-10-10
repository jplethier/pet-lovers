class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :kind
      t.string :breed
      t.references :user, foreign_key: true, index: true

      t.timestamps
    end
  end
end
