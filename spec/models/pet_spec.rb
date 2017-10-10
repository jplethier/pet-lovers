require 'rails_helper'

describe Pet, type: :model do
  describe 'validations' do
    subject { pet }

    let(:pet) { FactoryGirl.build_stubbed :pet }

    it 'requires a name' do
      expect { pet.name = nil }
        .to change { pet.valid? }.from(true).to(false)
    end

    it 'requires an user' do
      expect { pet.user = nil }
        .to change { pet.valid? }.from(true).to(false)
    end
  end
end
