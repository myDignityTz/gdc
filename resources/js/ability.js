import { AbilityBuilder } from '@casl/ability'

export default AbilityBuilder.define(can => {
    can('view', 'Dashboard');
    can('view', 'Setting');
    can('browse', 'Allegation');
    can('browse', 'Stakeholder');
    can('browse', 'User');
    can('browse', 'AllegationType');
    can('browse', 'Region');
    can('browse', 'District');
    can('browse', 'SuspectRelationship');
});
