export class DnDCharacter {
  
  strength = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  constitution = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  charisma =  DnDCharacter.generateAbilityScore();
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    // cogemos los 4 numeros aleatorios de los dados y los almacenamos el un array
    const numerosAleatorios: number[] = [this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber()];
    numerosAleatorios.sort();
    numerosAleatorios.shift();
    const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
    return numerosAleatorios.reduce(reducer, 0);
  }
  // Genera numero random 1-6
  private static getRandomNumber(): number {
    return Math.floor(Math.random() * 6 + 1);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
