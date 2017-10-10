# Controller for pets pages
class PetsController < ApplicationController
  def index
    pets = Pet.all
    render component: 'PetsList', props: { pets: pets }, prerender: false
  end
end
