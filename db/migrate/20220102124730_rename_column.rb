class RenameColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column(:services, :type, :s_type)
  end
end
