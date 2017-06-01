So, the problem now is to figure out how to create the habit thing I've just designed. 

What are three problems? 

model
msg
persistence

type alias viewModel = 
  { daily: HabitReport
  , weekly: HabitReport
  , monthly: HabitReport
  }

type alias HabitReport = 
  { currentPeriodTitle: String
  , currentPeriodTitle: String
  , habits = Dict Int Habit
  }

type alias Habit = 
  { title: String
  , id = Int
  , currentPeriod: Bool
  , previousPeriod: Bool
  }

type HabitType
  = Daily
  | Weekly
  | Monthly

type Period
  = Current
  | Previous

type Msg 
  = ToggleComplete HabitType HabitID Period
  | SetHabitTitle HabitType HabitID String

{-
  I suppose that should take care of things. It's not too bad. What should I do next? 
  Since I don't really want to mess around with Elm today, I'll do this in JS. 

  What else is going on? 
  The hard part is going to be figuring out how to go between the model and viewModel. 

  Anyway, what's next? Implement viewModel. Then implement viewModel2Model and model2ViewModel vm2m m2vm

  anyway... That's cool. I'm excited! I'll keep everything in memory for now, and just use those messages too. Okay. 
  When you call 'update', a render call can be there too. And a global definition of the model. 

-}