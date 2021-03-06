export { default, ComponentFactory } from './src/component';
export { default as ComponentDefinition } from './src/component-definition';
export { default as ComponentManager, EnvironmentWithOwner } from './src/component-manager';
export {
  RootReference,
  CachedReference,
  UpdatableReference,
  ConditionalReference,
} from './src/references';
export { default as TemplateMeta } from './src/template-meta';
export { CAPABILITIES } from './src/capabilities';
export { setPropertyDidChange } from './src/deprecations';

export { tracked } from '@glimmer/tracking';
