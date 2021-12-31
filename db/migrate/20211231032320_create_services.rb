class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :type
      t.integer :min
      t.text :desc
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
