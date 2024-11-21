import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./info.css"

export const InfoBox = ({info}) => {
    const Hot_url = "https://tse1.mm.bing.net/th?id=OIP._6UW1704oYjKYfVcf84iMgHaEc&pid=Api&P=0&h=180";
    const cold_url = "https://wallpaperaccess.com/full/2943299.jpg";
    const rain_url = "https://wallpaperset.com/w/full/5/8/8/32321.jpg";
  return (
    <div>
        <div className='boxContainer'>
        <Card sx={{ maxWidth: 345,width:"50%" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 70 ? rain_url : info.temp > 15 ? Hot_url : cold_url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}</p>
                    <p>Max-Temperature = {info.tempMax}</p>
                    <p>Min-Temperature = {info.tempMin}</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>{`Weather of ${info.city} is ${info.weather}`}</p>
                    <p>{`It Feels Like ${info.feelsLike}`}</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
  )
}
