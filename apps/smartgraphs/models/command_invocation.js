// ==========================================================================
// Project:   Smartgraphs.CommandInvocation
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Smartgraphs.CommandInvocation = SC.Record.extend(
/** @scope Smartgraphs.CommandInvocation.prototype */ {

  url: SC.Record.attr(String),
  primaryKey: 'url',
  
  /** 
    The Command to execute. Commands are general and reusable; this CommandInvocation represents a particular
    invocation of a command, with particular arguments, in a particular ActivityStep or Button
  */
  command: SC.Record.toOne('Smartgraphs.Command'),
  
  /** 
    The TriggerResponse block that owns this particular invocation
  */
  triggerResponse: SC.Record.toOne('Smartgraphs.TriggerResponse', { inverse: 'commands', isMaster: YES }),
  
  /**
    The order of this invocation, relative to the other CommandInvocations with the same 'owner' Button or ActivityStep
  */
  index: SC.Record.attr(Number),

  // These hashes override the defaults set in the Command record

  /**
    Argument keys and values that will be passed as-is to the action.
    Any keys in this hash override keys with the same name (from literalArgs or subsitutedArgs) in the Command record
  */
  literalArgs: SC.Record.attr(Object),
  
  /**
    Argument keys and values of arguments that will be substituted before being passed to the action.
    Any keys in this hash override keys with the same name (from literalArgs or subsitutedArgs) in the Command record    
  */
  substitutedArgs: SC.Record.attr(Object)
  
}) ;
