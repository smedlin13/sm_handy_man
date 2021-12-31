class AddNumberToWorkers < ActiveRecord::Migration[6.1]
  def change
    add_column :workers, :number, :integer
  end
end
