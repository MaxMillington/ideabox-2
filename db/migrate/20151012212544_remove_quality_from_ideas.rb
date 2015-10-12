class RemoveQualityFromIdeas < ActiveRecord::Migration
  def change
    remove_column :ideas, :quality



  end
end
