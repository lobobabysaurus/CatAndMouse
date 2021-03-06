import States from '../constants/state';


export default class BootState extends Phaser.State {

  public create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.state.start(States.LOAD);
  }
}
