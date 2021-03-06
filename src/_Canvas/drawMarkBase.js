'use strict';

const drawBarMark=(canvas,maxData,len,width,height,scale,dire)=>{
      let ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'black';
      let eachMark = parseInt(maxData/len)*2;
      if(eachMark==0)
          eachMark = 0.5;
      ctx.textAlign = 'right';
      let i=0;
      let actualHeight=height;
      ctx.fillText(0,0,actualHeight);
      while(i<maxData){
        let thisMark = i+eachMark;
        let y=height-scale(thisMark)

        ctx.moveTo(5,y);
        ctx.lineTo(width,y);
        ctx.strokeStyle="rgba(135,135,135,0.5)";
        ctx.stroke();
        // mark the figure
        ctx.fillText(thisMark,0,y,15);
        i=i+eachMark;
      }
      return ctx
}

export default drawBarMark;
