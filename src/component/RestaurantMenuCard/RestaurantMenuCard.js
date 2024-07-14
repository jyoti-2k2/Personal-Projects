import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RestaurantMenuList from './RestaurantMenuList/RestaurantMenuList';


const RestaurantMenuCard = ({ menuData }) => {

    const [expanded,setExpanded]=useState("recommended")  
    const title = menuData.card.card.title  
   

    const {itemCards} = menuData.card.card


    return (

        <> 
    
                <Accordion>
                <AccordionSummary  expandIcon={<KeyboardArrowDownIcon/>}>
                    <Typography sx={{fontSize:'18px', fontWeight:'800'}}>
                        {title}  ({itemCards.length})
                    </Typography>
    
                </AccordionSummary>
                <AccordionDetails>
                    {itemCards.map((item)=><RestaurantMenuList key={item.card.info.id} item={item}/> )
                    
                    }
                    
            
                    
                </AccordionDetails>
                </Accordion>
            
        
      
        
        </>
        
    )
}

export default RestaurantMenuCard