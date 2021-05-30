

function PassoMJ() {}

Object.assign( PassoMJ.prototype, {
    init: function() {
        let upperRightLegTween = new TWEEN.Tween( {theta:0} )
            .to({theta:Math.PI/8 } , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let right_upper_leg =  robot.getObjectByName("right_upper_leg");
                //let right_upper_arm = robot.getObjectByName("torso");
                right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(1.7, -4.52, 0 ) );


                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_leg.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })

            let upperleftLegTween = new TWEEN.Tween( {theta:0} )
            .to({theta:Math.PI/8 *-1} , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let left_upper_leg =  robot.getObjectByName("left_upper_leg");
                //let right_upper_arm = robot.getObjectByName("torso");
                left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-1.7, -4.52, 0 ) );


                // Updating final world matrix (with parent transforms) - mandatory
                left_upper_leg.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })

            let upperRightArmTween = new TWEEN.Tween( {theta:0} )
            .to({theta:Math.PI } , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");
                //let right_upper_arm = robot.getObjectByName("torso");
                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(2.5, 4.52, 0 ) );


                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })

            let lowerLeftArmTween = new TWEEN.Tween( {theta:0} )
            .to({theta:Math.PI/3 } , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let left_lower_arm =  robot.getObjectByName("left_lower_arm");
                //let right_upper_arm = robot.getObjectByName("torso");
                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(0.8, -2.3, 0 ) );


                // Updating final world matrix (with parent transforms) - mandatory
                left_lower_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })
            lowerLeftArmTween.start();
            upperRightArmTween.start();
            upperleftLegTween.start();
            upperRightLegTween.start();

    },
    animate: function(time) {
        window.requestAnimationFrame(this.animate.bind(this));
        TWEEN.update(time);
    },
    run: function() {
        this.init();
        this.animate(0);
    }
});
