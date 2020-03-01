<!-- ======================================================================
--- Search engine
title:          Setup
keywords:       setup
description:    Set up the ng-translation package.
--- Menu system
order:          10
text:           Setup
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /documentation
side-menu-header:   Documentation
side-menu-top:      Installation
side-menu-depth:    2
======================================================================= -->

# Setup

### Root module

To use ng-translation you have to import the NgTranslationModule.forRoot()
in the root module of your Angular application:

{{ setup/root }}

The forRoot method requires a configuration object, see later.

### Feature modules or shared module

In feature modules you have to use the NgTranslationModule.forChild()
method, or if you use a shared module that you import in multiple other
feature modules, you can export the NgTranslationModule to make sure you
don't have to import it in every module.

{{ setup/feature }}

### Lazy loaded module

For lazy loaded modules yuo have to use the LoadTranslationsGuard in the
route definitions to load the translations before loading the modules:

{{ setup/lazy }}

The translations belonging to the lazy loaded modules are identified by the
path. To avoid path conflicts you can use an alternative way to identify the
proper translation. Add a data object having a section prefix property to
the route definition:

{{ setup/guard }}
