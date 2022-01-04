class Comment < ApplicationRecord
  belongs_to :service
  validates :author, :body, :title, presence: true 
end
