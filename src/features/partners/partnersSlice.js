import { PARTNERS } from '../../app/shared/PARTNERS';


// selector returning an entire PARTNERS
export const selectAllPartners = () => {
    return PARTNERS;
} 

// selector that finds and returns a Featured partner
export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured) 
}

