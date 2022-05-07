import type { ImageReplaceVoiceData } from '../ChatPortraitModels';
import CONSTANTS from '../constants';

export default {
  SYSTEM_ID: 'a5e',
  imageReplacerDamageType: <ImageReplaceVoiceData[]>[
    { name: 'A5E.DamageAcid', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/acid.svg` },
    { name: 'A5E.DamageBludgeoning', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/bludgeoning.svg` },
    { name: 'A5E.DamageCold', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/cold.svg` },
    { name: 'A5E.DamageFire', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/fire.svg` },
    { name: 'A5E.DamageForce', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/force.svg` },
    { name: 'A5E.DamageLightning', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/lightning.svg` },
    { name: 'A5E.DamageNecrotic', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/necrotic.svg` },
    { name: 'A5E.DamagePiercing', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/piercing.svg` },
    { name: 'A5E.DamagePoison', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/poison.svg` },
    { name: 'A5E.DamagePsychic', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/psychic.svg` },
    { name: 'A5E.DamageRadiant', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/radiant.svg` },
    { name: 'A5E.DamageSlashing', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/slashing.svg` },
    { name: 'A5E.DamageThunder', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/thunder.svg` },
    { name: 'A5E.DamageUnknown', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/non_magical_physical.svg` },
  ],
  imageReplacerWeaponProperties: <ImageReplaceVoiceData[]>[
    { name: 'A5E.WeaponPropertyBurn', icon: `` },
    { name: 'A5E.WeaponPropertyBreaker', icon: `` },
    { name: 'A5E.WeaponPropertyCompounding', icon: `` },
    { name: 'A5E.WeaponPropertyDefensive', icon: `` },
    { name: 'A5E.WeaponPropertyDualWielding', icon: `` },
    { name: 'A5E.WeaponPropertyFinesse', icon: `` },
    { name: 'A5E.WeaponPropertyFlamboyant', icon: `` },
    { name: 'A5E.WeaponPropertyHandMounted', icon: `` },
    { name: 'A5E.WeaponPropertyHeavy', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/heavy.svg` },
    { name: 'A5E.WeaponPropertyInaccurate', icon: `` },
    { name: 'A5E.WeaponPropertyLoading', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/loading.svg` },
    { name: 'A5E.WeaponPropertyMounted', icon: `` },
    { name: 'A5E.WeaponPropertyMuzzleLoading', icon: `` },
    { name: 'A5E.WeaponPropertyParrying', icon: `` },
    { name: 'A5E.WeaponPropertyParryingImmunity', icon: `` },
    { name: 'A5E.WeaponPropertyQuickdraw', icon: `` },
    { name: 'A5E.WeaponPropertyRange', icon: `` },
    { name: 'A5E.WeaponPropertyReach', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/reach.svg` },
    { name: 'A5E.WeaponPropertyRifled', icon: `` },
    { name: 'A5E.WeaponPropertyScatter', icon: `` },
    { name: 'A5E.WeaponPropertyShock', icon: `` },
    { name: 'A5E.WeaponPropertySimple', icon: `` },
    { name: 'A5E.WeaponPropertyThrown', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/thrown.svg` },
    { name: 'A5E.WeaponPropertyTriggerCharge', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/special.svg` },
    { name: 'A5E.WeaponPropertyTrip', icon: `` },
    { name: 'A5E.WeaponPropertyTwoHanded', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/two-Handed.svg` },
    { name: 'A5E.WeaponPropertyVersatile', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/versatile.svg` },
    { name: 'A5E.WeaponPropertyVicious', icon: `` },
  ],
  imageReplacerIconizer: <ImageReplaceVoiceData[]>[
    { name: 'A5E.AbilityDefault', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/gaming_set.svg` },
    { name: 'A5E.AbilitySpellcasting', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/arcana.svg` },
    { name: 'A5E.AbilityCheck', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/survival.svg` },

    { name: 'A5E.AbilityStr', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/strength.svg` },
    { name: 'A5E.AbilityDex', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/dexterity.svg` },
    { name: 'A5E.AbilityCon', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/constitution.svg` },
    { name: 'A5E.AbilityInt', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/intelligence.svg` },
    { name: 'A5E.AbilityWis', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/wisdom.svg` },
    { name: 'A5E.AbilityCha', icon: `/modules/${CONSTANTS.MODULE_NAME}/assets/charisma.svg` },
  ],
};
