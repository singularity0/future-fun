using System;

namespace Animals
{
    class Start
    {
        static void Main()
        {
            var animalsGroup = CreateAnimals();
            AnimalsShowWhatYouCanDo(animalsGroup);
        }

        private static void AnimalsShowWhatYouCanDo(dynamic animalsGroup)
        {
            AnimalsSleep(animalsGroup);
            AnimalsEat(animalsGroup);
            AnimalsFly(animalsGroup);
            AnimalsRoar(animalsGroup);
            AnimalsSwim(animalsGroup);
        }

        private static dynamic CreateAnimals()
        {
            Animal someBee, someEagle, someLion, someDolphin;

            someBee = Factory.Get(Species.Bee, 5);
            someEagle = Factory.Get(Species.Eagle, 15);
            someLion = Factory.Get(Species.Lion, 15);
            someDolphin = Factory.Get(Species.Dolphin, 15);

            dynamic[] animalsGroup = new dynamic[4];
            animalsGroup[0] = someBee;
            animalsGroup[1] = someEagle;
            animalsGroup[2] = someLion;
            animalsGroup[3] = someDolphin;

            return animalsGroup;
        }

        public static void DrawSeparators()
        {
            Console.WriteLine(new string('=', 25));
        }

        public static void AnimalsSleep(dynamic animalsGroup)
        {
            DrawSeparators();
            Console.WriteLine("Animals, start sleeping");
            DrawSeparators();

            for (int i = 0; i < animalsGroup.Length; i++)
            {
                var animalType = animalsGroup[i].GetType().Name;
                Console.Write($"{animalType} --> ");
                try
                {
                    animalsGroup[i].Sleep();
                }
                catch (Exception)
                {
                    Console.WriteLine("I can't");

                }
            }
        }

        public static void AnimalsFly(dynamic animalsGroup)
        {
            DrawSeparators();
            Console.WriteLine("Animals, start flying");
            DrawSeparators();

            for (int i = 0; i < animalsGroup.Length; i++)
            {
                var animalType = animalsGroup[i].GetType().Name;
                Console.Write($"{animalType} --> ");
                try
                {
                    animalsGroup[i].Fly();
                }
                catch (Exception)
                {
                    Console.WriteLine("I can't");

                }
            }
        }

        public static void AnimalsRoar(dynamic animalsGroup)
        {
            DrawSeparators();
            Console.WriteLine("Animals, start roaring");
            DrawSeparators();

            for (int i = 0; i < animalsGroup.Length; i++)
            {
                var animalType = animalsGroup[i].GetType().Name;
                Console.Write($"{animalType} --> ");
                try
                {
                    animalsGroup[i].Roar();
                }
                catch (Exception)
                {
                    Console.WriteLine("I can't");

                }
            }
        }

        public static void AnimalsEat(dynamic animalsGroup)
        {
            DrawSeparators();
            Console.WriteLine("Animals, start eating");
            DrawSeparators();

            for (int i = 0; i < animalsGroup.Length; i++)
            {
                var animalType = animalsGroup[i].GetType().Name;
                Console.Write($"{animalType} --> ");
                try
                {
                    animalsGroup[i].Eat();
                }
                catch (Exception)
                {
                    Console.WriteLine("I can't");

                }
            }
        }

        public static void AnimalsSwim(dynamic animalsGroup)
        {
            DrawSeparators();
            Console.WriteLine("Animals, start swimming");
            DrawSeparators();

            for (int i = 0; i < animalsGroup.Length; i++)
            {
                var animalType = animalsGroup[i].GetType().Name;
                Console.Write($"{animalType} --> ");
                try
                {
                    animalsGroup[i].Swim();
                }
                catch (Exception)
                {
                    Console.WriteLine("I can't");

                }
            }
        }

    }

    public interface IAnimal
    {
        int Age { get; set; }
        void Sleep();
        void Eat();
    }

    public interface IFly
    {
        void Fly();
    }
    public interface IRoar
    {
        void Roar();
    }

    public interface ISwim
    {
        void Swim();
    }

    public class RoaringAnimal : Animal, IRoar
    {
        public RoaringAnimal(int age) : base(age)
        {
            
        }
        public void Roar()
        {
            Console.WriteLine("wrrrrr ");
        }
    }

    public class FlyinAnimal : Animal, IFly
    {
        public FlyinAnimal(int age) : base(age)
        {
        }

        public void Fly()
        {
            Console.WriteLine("whoohooo");
        }
    }

    public class SwimmingAnimal : Animal, ISwim
    {
        public SwimmingAnimal(int age) : base(age)
        {
        }

        public void Swim()
        {
            Console.WriteLine("splah"); ;
        }
    }

    public class Animal: IAnimal
    {
        private int age;
        public Animal(int age)
        {
            this.age = age;
        }

        public int Age
        {
            get
            {
                return this.age;
            }
            set
            {
                this.age = value;
            }
        }

        public void Sleep()
        {
            Console.WriteLine("zzzzzz");
        }
        public void Eat()
        {
            Console.WriteLine("yummy");
        }
    }

    public class Dolphin : SwimmingAnimal
    {
        public Dolphin(int age) : base(age)
        {
        }
    }

    public class Lion : RoaringAnimal
    {
        public Lion(int age) : base(age)
        {
        }
    }

    public class Eagle : FlyinAnimal
    {
        public Eagle(int age) : base(age)
        {
        }
    }

    public class Bee : FlyinAnimal
    {
        public Bee(int age) : base(age)
        {
        }
    }

    public enum Species
    {
        Bee,
        Eagle,
        Lion,
        Dolphin
    }

    public static class Factory
    {
        public static Animal Get(Species speciesMember, int age)
        {
            switch (speciesMember)
            {
                case Species.Bee: return new Bee(age);
                case Species.Eagle: return new Eagle(age);
                case Species.Dolphin: return new Dolphin(age);
                case Species.Lion: return new Lion(age);

                default: throw new NotImplementedException();
            }
        }
    }






}
