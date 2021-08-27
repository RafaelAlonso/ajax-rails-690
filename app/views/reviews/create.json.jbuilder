# se consegui salvar meu review
if @review.persisted?
  # criar no meu json a chave "form" com a partial do meu form de valor
  json.form json.partial!('reviews/form.html.erb', restaurant: @restaurant, review: Review.new)

  # criar no meu json a chave "inserted_item" com a partial da minha review nova de valor
  json.inserted_item json.partial!('restaurants/review.html.erb', review: @review)
else
  # criar no meu json a chave "form" com a partial do meu form de valor
  json.form json.partial!('reviews/form.html.erb', restaurant: @restaurant, review: @review)
end
