import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from '@/styles/projectCard.module.css'

export default function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 360 }} className={styles.projectCard} raised={true}>

      <CardMedia
        className={styles.cardMediaStyle}
        component='img'
        sx={{ height: 190 }}
        image={props.projObj.image.src}
        title='Screengrab of Project'
      />

      <CardContent>
        <div className={styles.projName}>
          <Typography gutterBottom variant="h5" component="div">
            {props.projObj.name}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" align='center' className={styles.cardText}>
          {props.projObj.info}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardLinksContainer}>
        <div >
          <Button size="small" href={props.projObj.git} target='none' className={styles.cardButton}>Github</Button>
          <Button size="small" href={props.projObj.url} target='none' className={styles.cardButton}>Deployed Site</Button>
        </div>
      </CardActions>
    </Card>
  );
}