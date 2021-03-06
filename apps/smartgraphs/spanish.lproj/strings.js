// Project:   SmartGraphs Spanish Language Strings
// Copyright: ©2014 Concord Consortium
// Author:  npaessel@concord.org
// ==========================================================================
/* globals SC */

// Place strings you want to localize here.  In your app, use the key and
// localize it using "key string".loc().
// look for strings matching "@:" using `grep -r "@:" ./apps/smartrgaphs

SC.stringsFor('Spanish', {

  "@:TEST": "Testing Spanish",

  // ==========================================================================
  // ./views/credits.js
  // ==========================================================================
  '@:views.credits.projectInfo': "Software SmartGraphs" +
      "(<a target='_blank' href='http://smartgraphs.org'>smartgraphs.org</a>) "+
      "está basado en trabajo apoyado por la National Science Foundationunder Subvención No. DRL-0918522."+
      "Las opiniones, resultados, conclusiones o recomendaciones expresadas en este material son las del autor (s)"+
      "y no reflejan necesariamente las opiniones de la National Science Foundation." +
      "El software es propiedad intelectual de"+
      "the <a target='_blank' href='https://github.com/concord-consortium/Smartgraphs/blob/master/LICENSE.md' "+
      "title='La Licencia Concord Software Consortium'>"+
      "Concord Consortium bajo la Licencia Pública General de MIT</a>, "+
      "que le permite utilizar y distribuir este software. ",

  '@:views.credits.projectInfo.graph_literacy': ""+
      "Graph Literacy " +
      "(<a target='_blank' href='http://concord.org/projects/graph-literacy'>concord.org/projects/graph-literacy</a>) "+
      "está basado en trabajo apoyado por la National Science Foundationunder Subvención No. DRL-0918522."+
      "Las opiniones, resultados, conclusiones o recomendaciones expresadas en este material son las del autor (s)"+
      "y no reflejan necesariamente las opiniones de la National Science Foundation." +
      "El software es propiedad intelectual de"+
      "the <a target='_blank' href='https://github.com/concord-consortium/Smartgraphs/blob/master/LICENSE.md' "+
      "title='La Licencia Concord Software Consortium'>"+
      "Concord Consortium bajo la Licencia Pública General de MIT</a>, "+
      "que le permite utilizar y distribuir este software. ",

  '@:views.credits.authorName': "El equipo SmartGraphs en el Concord Consortium. ",

  '@:views.credits.licenseInfo': "La actividad está disponible bajo la licencia Creative Commons"+
      "<a target='_blank' href='http://creativecommons.org/licenses/by/4.0/' title='Creative Commons Attribution 4.0'"+
      "Creative Commons Attribution 4.0 (CC-BY)</a>, " +
      "que le permite utilizar y distribuir esta actividad.",

  '@:views.credits.projectOf':  "SmartGraphs es un proyecto de The Concord Consortium",
  '@:views.credits.projectOf.graph_literacy':  "Graph Literacy es un proyecto de The Concord Consortium",
  '@:views.credits.activityBy': "Esta actividad fue desarrollado por SmartGraphs:",
  '@:views.credits.activityBy.graph_literacy': "Esta actividad fue desarrollado por Graph Literacy:",
  '@:views.credits.close':      "Cerrar",
  // ==========================================================================
  // ./controllers/activity_pages.js
  // ==========================================================================
  '@:controllers.activity_pages.page_number':  'Página %@', //.loc(page.get('pageNumber') + 1),
  '@:controllers.activity_pages.step_number':  'Paso %@', //.loc(stepNum++),

  // ==========================================================================
  // ./resources/pages/main_page.js
  // ==========================================================================
  '@:resources.pages.main_page.credits': 'Créditos',
  '@:resources.pages.main_page.home':    'Inicio',
  '@:resources.pages.main_page.edit':    'Editar',
  '@:resources.pages.main_page.run':     'Run',
  '@:resources.pages.main_page.back':    'Anterior',
  '@:resources.pages.main_page.next':    'Siguiente',

  // ==========================================================================
  // ./controllers/activity_step.js
  // ==========================================================================
  '@:controllers.activity_steps.OK':               'OK',
  '@:controllers.activity_steps.Check My Answer':  'Compruebe Mi Respuesta',
  '@:controllers.activity_steps.Continue':         'Continuar',


  // ==========================================================================
  // ./views/graph_pane.js
  // ==========================================================================
  '@:views.graph_pane.start': 'Inicio',
  '@:views.graph_pane.stop':  'Deténgase',
  '@:views.graph_pane.reset': 'Reanudar',

  // ==========================================================================
  // .views/response_template.js
  // ==========================================================================
  '@:views.response_template.textarea': 'Escriba su respuesta aquí …',

  // ==========================================================================
  // states/activity.js
  // ==========================================================================
  '@:states.activity.nav_ok': "OK",
  '@:states.activity.nav_cancel': "Cancel",
  '@:states.activity.nav_title': "Restart?",
  '@:states.activity.nav_home': "" +
    "Are you sure you want to return to the menu?\n\n" +
    "You will lose your place in the activity if you leave this page.\n"

}) ;
