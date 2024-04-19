import React from 'react';
import { Image, Input, Button } from '@nextui-org/react';

interface HeroProps {
    backgroundImage?: string; // Optional background image URL
}

const LandingHero: React.FC<HeroProps> = ({ backgroundImage = 'https://placehold.co/1280x800' }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'stretch', minHeight: '60vh', maxHeight: '60vh' }}>
            <div style={{ maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
                <h1>You can put a price on healthcare.</h1>
                <p>
                    Just like you wouldn't buy a car, rent an apartment, or even order food without knowing the cost, you shouldn't just pay for healthcare.
                </p>
                <Input placeholder="Enter service name or code..." />
                <Button>Search</Button>
            </div>
            <div style={{ flex: 1 }}>
                <img
                    src={"https://static.turquoise.health/static/images/new-home-bannerImage.92c4de7d77ec.png"}
                    alt="Hero background image"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
};

export default LandingHero;
