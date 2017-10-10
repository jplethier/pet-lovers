class AddPictureUrlToPets < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :picture_url, :string
  end
end
