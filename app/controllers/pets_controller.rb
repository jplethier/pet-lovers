# Controller for pets pages
class PetsController < ApplicationController
  def index
    pets = Pet.all
    render component: 'PetsList', props: { pets: pets }, prerender: false
  end

  def show
    pet = Pet.find(params[:id])
    render component: 'PetInfo', props: { pet: pet }, prerender: false
  end
end
