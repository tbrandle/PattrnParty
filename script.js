$('.tab').on('click', (e) => {
  const nextContentId = $(e.target).attr('name')
  const previousContentId = $('.tabs-section').children('.selected-tab').attr('name')
  $('.tabs-section').children('.selected-tab').removeClass('selected-tab')
  $(e.target).addClass('selected-tab')

  $(`#${previousContentId}`).attr('hidden', true)
  $(`#${nextContentId}`).removeAttr('hidden')
})

$('.dropdown-menu').on('click', () => {
  $('.header-bar-section').children('.nav-link-wrapper').toggleClass('show-dropdown')
})


/***************** VIEW SOURCE ***************/

$('.view-source-accordian').on('click', () => {
  if (!$('.view-source-accordian-container').children().hasClass('cp_embed_wrapper')) {
    $('.view-source-accordian-container').append(`
      <p data-height="464" data-theme-id="0" data-slug-hash="zwaaKo" data-default-tab="html" data-user="tbrandle" data-embed-version="2" data-pen-title="PattrnParty" class="codepen">See the Pen <a href="https://codepen.io/tbrandle/pen/zwaaKo/">PattrnParty</a> by Tim Brandle (<a href="http://codepen.io/tbrandle">@tbrandle</a>) on <a href="http://codepen.io">CodePen</a>.</p>
      <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      `)
  } else if($('.cp_embed_wrapper').attr('hidden')) {
    $('.cp_embed_wrapper').removeAttr('hidden', 'hidden')
  } else {
    $('.cp_embed_wrapper').attr('hidden', 'hidden')
  }
})

$('.view-source-flexible').on('click', () => {
  if (!$('.view-source-flexible-container').children().hasClass('cp_embed_wrapper')) {
    $('.view-source-flexible-container').append(`
      <p data-height="464" data-theme-id="0" data-slug-hash="MmNYbB" data-default-tab="html,result" data-user="tbrandle" data-embed-version="2" data-pen-title="Flexible Cards" class="codepen">See the Pen <a href="https://codepen.io/tbrandle/pen/MmNYbB/">Flexible Cards</a> by Tim Brandle (<a href="https://codepen.io/tbrandle">@tbrandle</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      `)
  } else if($('.cp_embed_wrapper').attr('hidden')) {
    $('.cp_embed_wrapper').removeAttr('hidden', 'hidden')
  } else {
    $('.cp_embed_wrapper').attr('hidden', 'hidden')
  }
})

$('.view-source-header').on('click', () => {
  if (!$('.view-source-header-container').children().hasClass('cp_embed_wrapper')) {
    $('.view-source-header-container').append(`
      <p data-height="265" data-theme-id="0" data-slug-hash="YVmEqO" data-default-tab="css,result" data-user="tbrandle" data-embed-version="2" data-pen-title="Header Bar" class="codepen">See the Pen <a href="https://codepen.io/tbrandle/pen/YVmEqO/">Header Bar</a> by Tim Brandle (<a href="https://codepen.io/tbrandle">@tbrandle</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      `)
  } else if($('.cp_embed_wrapper').attr('hidden')) {
    $('.cp_embed_wrapper').removeAttr('hidden', 'hidden')
  } else {
    $('.cp_embed_wrapper').attr('hidden', 'hidden')
  }
})
