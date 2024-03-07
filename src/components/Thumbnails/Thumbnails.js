import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';


export default function Thumbnails({foods} ) {
  return (
  <ul className={classes.list}>
    {foods.map(food => (
        <li key={foods.id}>
            <Link to={`/food/${food.id}`}>
                <img 
                className={classes.image}
                src={`/foods/${food.imageUrl}`}
                alt={food.name}
                />
         
            <div className={classes.cotent}>
                <div className={classes.name}>{food.name}
                <span className={`${classes.favorite} ${
                    food.favorite? '' : classes.not
                }`}>
                 <br></br>@
                </span>
                <div className={classes.stars}>
                    <StarRating stars={foods.stars} />
                </div>

                <div className={classes.product_item_footer}>
                    <div className={classes.origins}>
                        {food.origins.map(origin => (
                            <span key={origin}>{origin}</span>
                        ))}
                    </div>
                    <div className={classes.cook_time}>
                        <span>~</span>
                        {food.cookTime}
                    </div>
                </div>

                <div className={classes.price}>
                    <Price price={food.price} />
                </div>
                </div>
            </div>
            </Link>
        </li>
    ))}
  </ul>
  );
}

